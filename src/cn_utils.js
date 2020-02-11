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

// Original Author: Lucas Jones
// Modified by luigi1111 2017

import keccak from 'keccak'
import { JSBigInt } from './biginteger'

export function encode_varint(i) {
  i = new JSBigInt(i)
  let out = ''
  // while i >= b10000000
  while(i.compare(0x80) >= 0) {
    // out.append i & b01111111 | b10000000
    out += ('0' + ((i.lowVal() & 0x7f) | 0x80).toString(16)).slice(-2)
    i = i.divide(new JSBigInt(2).pow(7))
  }
  out += ('0' + i.toJSValue().toString(16)).slice(-2)
  return out
}

function hextobin(hex) {
  if(hex.length % 2 !== 0) {
    throw new Error('Hex string has invalid length!')
  }
  const res = Buffer.alloc(hex.length / 2)
  for(let i = 0; i < hex.length / 2; ++i) {
    res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return res
}

export function cn_fast_hash(i) {
  if(Buffer.isBuffer(i)) {
    return keccak('keccak256').update(i).digest('hex')
  } else if(typeof i === 'string') {
    return keccak('keccak256').update(hextobin(i)).digest('hex')
  } else {
    throw new Error('Input must be Buffer or String')
  }
}
