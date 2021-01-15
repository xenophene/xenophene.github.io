---
layout: post
title: "Cryptocurrency"
date: 2020-12-01 23:00:00 -0800
categories: finance
---
Here is the accompanying article for the [video](https://www.youtube.com/watch?v=nGJLXrUz5do) I made explaining Bitcoin.

### What is cryptography
- Science of secure communication between parties in an insecure environment
- Key breakthroughs
    - Public key cryptography like RSA
        - A picks two prime numbers P & Q (N = PQ), hard to get P & Q from N
        - A finds D & E s.t. **E * D ≡ 1 mod (P-1)(Q-1)**
        - B sends **M^E mod N = C** to A
        - **C^D mod N = M^(E*D) mod N = M** (by Fermat's little theorem, a^(p-1) mod p = 1)
    - Cryptographic hash functions like SHA256
        - [https://passwordsgenerator.net/sha256-hash-generator/](https://passwordsgenerator.net/sha256-hash-generator/)

### What is currency
- Essential criteria
    - Store of "consensus" wealth
    - Medium of exchange
    - Unit of account
    - Unforgeable scarcity
- Examples: precious metals (gold / silver), fiat money, commodities, Bitcoin, time

### Centralized control mismanages money (inflation)
- Deflation is bad
    - Makes debt hard to pay over time
    - Incentivizes people to hoard money
- But so is hyper-inflation
    - Price of goods become too expensive too quickly
    - People less likely to loan out money
- Historically, government don't have a great track record of managing inflation
{% include image.html url="/btcimg1.png" description="World currencies" %}
{% include image.html url="/btcimg2.png" description="USD track record" %}

### What is Bitcoin
- A network protocol to reach consensus on a sequence of transactions without trust
- **Protocol**

{% include image.html url="/btcimg3.png" description="BTC blockchain" %}
    1. Every transaction has a source, destination, timestamp, amount and signature
    2. Miners listen for and group signed transactions, mine the nonce and broadcast the block
        - Nonce is a number s.t. SHA256 of the whole block results in a hash starting with 0s
    3. Every block has signed transactions, a nonce, hash of previous block and a block reward
    4. Everyone trusts the longest chain of blocks
        - Solves Byzantine generals' problem

### Characteristics of Bitcoin
- Predefined inflation
    - Every block, new bitcoins are created
    - That amount halves every 210K blocks
    - In total 21M bitcoins will be mined (by 2140)
{% include image.html url="/btcimg4.png" description="BTC inflation" %}

- Highly volatile!
{% include image.html url="/btcimg5.png" description="BTC volatility" %}

- Who controls it? Miners? Users? Programmers?

### Role of Bitcoin in society
- Insurance policy against today's economic system messing up
- Deregulates money supply and enables more economic inclusion
- Most companies outsource their digital infrastructure, should countries outsource their monetary policy to Bitcoin?
- If and when China's GDP surpasses that of the US, will everything still be priced in the USD or the Yuan? Will Bitcoin be the happy neutral?

### References
- [https://www.youtube.com/watch?v=bBC-nXj3Ng4](https://www.youtube.com/watch?v=bBC-nXj3Ng4)
- [https://bitcoin.org/bitcoin.pdf](https://bitcoin.org/bitcoin.pdf)
- [https://medium.com/coinmonks/fiat-v-gold-v-bitcoin-706a03332f2b](https://medium.com/coinmonks/fiat-v-gold-v-bitcoin-706a03332f2b)
- [https://www.linkedin.com/pulse/changing-value-money-ray-dalio](https://www.linkedin.com/pulse/changing-value-money-ray-dalio)
