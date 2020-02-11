// Copyright (c) 2014-2017, MyMonero.com
// Copyright (c) 2020, RagerX.lol
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import { decode } from './base58'
import { cn_fast_hash, encode_varint } from './cn_utils'

const KEY_SIZE = 32 * 2
const ADDRESS_CHECKSUM_SIZE = 4 * 2
const INTEGRATED_ID_SIZE = 8 * 2

export function validate(address, prefixes, raise=false) {
  let type, prefix, spend, view, pid, checksum
  try {
    const decodedAddr = decode(address)

    const expectedPrefixReg = encode_varint(prefixes[0])
    const expectedPrefixInt = encode_varint(prefixes[1])
    const expectedPrefixSub = encode_varint(prefixes[2])

    const expectedLengthReg = expectedPrefixReg.length + KEY_SIZE + KEY_SIZE + ADDRESS_CHECKSUM_SIZE
    const expectedLengthInt = expectedPrefixInt.length + KEY_SIZE + KEY_SIZE + INTEGRATED_ID_SIZE + ADDRESS_CHECKSUM_SIZE
    const expectedLengthSub = expectedPrefixSub.length + KEY_SIZE + KEY_SIZE + ADDRESS_CHECKSUM_SIZE

    let expectedChecksum

    if(decodedAddr.startsWith(expectedPrefixReg) && decodedAddr.length === expectedLengthReg) {
      type     = 'regular'
      prefix   = decodedAddr.slice(0, expectedPrefixReg.length)
      const d  = decodedAddr.slice(expectedPrefixReg.length)
      spend    = d.slice(0, KEY_SIZE)
      view     = d.slice(KEY_SIZE, KEY_SIZE + KEY_SIZE)
      checksum = d.slice(KEY_SIZE + KEY_SIZE, KEY_SIZE + KEY_SIZE + ADDRESS_CHECKSUM_SIZE)
      expectedChecksum = cn_fast_hash(prefix + spend + view).slice(0, ADDRESS_CHECKSUM_SIZE)
    } else if(decodedAddr.startsWith(expectedPrefixInt) && decodedAddr.length === expectedLengthInt) {
      type     = 'integrated'
      prefix   = decodedAddr.slice(0, expectedPrefixInt.length)
      const d  = decodedAddr.slice(expectedPrefixInt.length)
      spend    = d.slice(0, KEY_SIZE)
      view     = d.slice(KEY_SIZE, KEY_SIZE + KEY_SIZE)
      pid      = d.slice(KEY_SIZE + KEY_SIZE, KEY_SIZE + KEY_SIZE + INTEGRATED_ID_SIZE)
      checksum = d.slice(KEY_SIZE + KEY_SIZE + INTEGRATED_ID_SIZE, KEY_SIZE + KEY_SIZE + INTEGRATED_ID_SIZE + ADDRESS_CHECKSUM_SIZE)
      expectedChecksum = cn_fast_hash(prefix + spend + view + pid).slice(0, ADDRESS_CHECKSUM_SIZE)
    } else if(decodedAddr.startsWith(expectedPrefixSub) && decodedAddr.length === expectedLengthSub) {
      type     = 'sub'
      prefix   = decodedAddr.slice(0, expectedPrefixSub.length)
      const d  = decodedAddr.slice(expectedPrefixSub.length)
      spend    = d.slice(0, KEY_SIZE)
      view     = d.slice(KEY_SIZE, KEY_SIZE + KEY_SIZE)
      checksum = d.slice(KEY_SIZE + KEY_SIZE, KEY_SIZE + KEY_SIZE + ADDRESS_CHECKSUM_SIZE)
      expectedChecksum = cn_fast_hash(prefix + spend + view).slice(0, ADDRESS_CHECKSUM_SIZE)
    } else {
      throw new Error('Invalid prefix')
    }
    if(checksum !== expectedChecksum) {
      throw new Error('Invalid checksum')
    }
    return { valid: true, type, prefix, spend, view, pid, checksum }
  } catch(error) {
    if(raise) {
      throw(error)
    } else {
      return { valid: false, type, prefix, spend, view, pid, checksum }
    }
  }
}
