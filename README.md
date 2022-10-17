# Proof of passion for Blockchain technologies
### Day 14
#### <ins>**Candidate block**</ins>
A candidate block is a potential block to be added to the blockchain next to the current verified block. It contains the confirmed transactions data, previous block hash, and timestamp. Miners will compete to mine this block into the blockchain by guessing a special number. The miner who will first find this number will be able to append this candidate block into the blockchain and by combining all this block data a block hash will be created.

### Day 13
#### <ins>**Transaction pool**</ins>
Transaction pool is the intermediate stage where all the transactions sent to the network came and all of them are referred to as unconfirmed transactions. Then mining nodes pull these transactions and validate them with their signature and their spending from the ledger. The transaction is accepted by the network only if the majority of the network nodes validate it and rejected it otherwise. Once the transaction is fetched from the transaction pool and accepted by the network nodes it becomes immutable. So in a sense of database transaction, it works the same, it’s either committed or rolled back. If it’s committed then the changes are persistent and they’ll reside forever. 

### Day 12
#### <ins>**Mining nodes**</ins>
In the blockchain network, there are some special nodes called mining nodes. These nodes are part of a blockchain system that ensures the security and integrity of the system. These nodes keep on working to maintain the reliability of the network by putting their effort into the system. In the case of Bitcoin, these nodes keep on working to find the hash by solving a mathematical puzzle so they can mine a block to the blockchain and get the reward. And it makes sure that not a particular body can add blocks to the blockchain but the one who is putting in his effort. These nodes are special nodes because their primary aim is not to make the transactions in the network but to put their effort to make the network secure and to get some rewards out of thin air.

### Day 11
#### <ins>**Double spending attack**</ins>
The double spending attack is the attack in which a transaction ‘T1’  with a valid signature is issued to the network and some amount is sent to a public address ‘a’. The recipient of the amount ‘a’ will wait for the transaction to be confirmed and meanwhile, the sender of the transaction ‘T1’ issued another transaction ‘T2’ to transfer the amount to another wallet. This is the double spending problem in the blockchain and blockchain technology has developed the algorithms to prevent these kinds of attacks by consensus protocols.


### Day 10
#### <ins>**Consensus protocol**</ins>
In a distributed network where all nodes are equal and every node must have equal rights, it’s hard to believe that every node in the system is trustworthy. To validate transactions in the distributed system it is necessary for the maturity of the nodes to agree upon the validity of the transaction. And if the majority agrees upon the validity of the transactions then they should become part of the ledger and become immutable. And hence this is the case where blockchain consensus protocols came in. One of the major problems that these consensus protocols eliminate is the ‘Double Spending Problem’. If two transactions are sent to the network one is paid to one wallet and the second is paid to another wallet then these transactions are first sent into unconfirmed transactions. And if one transaction is confirmed first then the second one would be rejected and if they both came at the same time to be confirmed then only one would be accepted with a majority of votes. 


### Day 9
#### <ins>**Distributed Ledger**</ins>
All the transactions in the distributed network are recorded as a ledger with append only fashion. This ledger is publicly available to everyone. Everybody has a copy of the ledger in the synchronized fashion. Each node in the network validates each transaction and updates its ledger accordingly and hence it’s called the distributed ledger. Transactions are grouped into blocks and then each block appended at the end of the chain. 


### Day 8
#### <ins>**Network Architecture**</ins>
The Blockchain technology built on the distributed networks where the transactions occur on multiple systems called as nodes. The nodes in the blockchain system communication are peer-to-peer. That each node can communicate to any other node in the network which makes it essentially transparent about what’s going on or what’s happening there. 


### Day 7
#### <ins>**Validating transactions**</ins>
The first step of blockchain security is the validation of each transaction. The signed transaction can be validated with a public key and signed transaction message with very low computational steps. The pseudo for for signing and validating the transaction is as follow. 
  
Signing(private key, message) => signature   
Recover(public key, signature) => address


### Day 6
#### <ins>**Signed transaction**</ins>
In a distributed system each transaction must be signed by the private key so every other node can verify that the transaction is issued by the real owner. 
Let’s just have a case where a person initiates a transaction and moves funds from some other person's account to himself but every other node in the network won’t allow the transaction because it doesn’t have a valid signature. This is the very first step towards the security of a distributed network transaction system. Every transaction made on the blockchain is signed by the initiator of the transaction and every other node in the network is able to validate this transaction and can vote either if they have to accept the transaction or not without knowing the private key. 


### Day 5
#### <ins>**EllipticCurve**</ins>
Elliptic curve is a cryptographic algorithm used for data security. It is as secure as RSA but with a shorter length key. The general Elliptic curve equation is as follow

y^2 = x^3 + a*x + b

It generates the private key by choosing an ‘X’ and finds the point on the curve repeatedly doing a computation step X times. In this way it makes it a trapdoor function that can go only one way. With public and private key a message can be encrypted but with the given cipher and public key it’s almost impossible to guess the private key by using the computational power of modern computers. 


### Day 4
#### <ins>**Wallet**</ins>
The term wallet is mainly associated with the cryptocurrencies and not to the blockchain traditionally. But in reality the wallet is the public private key pair and a public address. All the transactions stored in the cryptocurrency distributed ledger built over the blockchain is recorded with a given public address and hence everybody can know the transaction history associated with the address and hence it’s called a wallet. It also contains how much amount came into this wallet(transferred to this address) and how much it has spent(transferred from this account) and its current balance(sum of total ins and outs). 

### Day 3 
#### <ins>**Privacy**</ins>
To participate in the distributed decentralized application nobody needs to reveal his or her identity. All they need to have a public and private key pair and from private key they can derive a public address which is the identity for the particular person in the network. All the transactions are pointing to or from this address which is an arbitrary string and no one can recalculate the private key or any other personal information related to that string which is indeed a hash generated. This public address in the block chain system is the hash of the public key associated with the given private key. So it's computationally impossible to guess the private key from the public address and no personal information is attached with the public address.

### Day 2 
#### <ins>**Key pair**</ins>
A key pair is the pair of public and private keys. Public keys can be produced by the private key. There is no way to determine the private key from a given public key. 
Private keys must be kept secure and private whereas public keys are revealed and known by everyone. 
For insecure network channels the message is signed by the private key (encryption) and creates a signature (cypher). This signature can only be decrypt by the public key associated with the private key with whom the message was signed. 
This helps to ensure that the given signed message is originally generated by the creator of the transaction. 
A public address is also derived from the private key.
RSA and EllipticCurve are two of the famous public key encryption algorithms. EllipticCurve can provide the same security level as of RSA but with shorter key length which can save computations. Hence Bitcoin uses the EllipticCurve signatures. 

Example:  
Assume we have a message as ‘m’, private key as ‘sk’ and public key as ‘pk’ and an Elliptic Curve signature function as ‘E’ which will sign the message and produce the signature as ‘s’. And the function to recover message from the signature is ‘C’ then

sk, m; 	E(sk, m) => s
pk, s; 	C(pk, s) => m

### Day 1 
#### <ins>**Hash function**</ins>
A math function that converts an arbitrary string or file into fixed length string(sequence of characters)
A smaller change in the input might change the output of hash function completely
The output of the hash function is completely unpredictable.
The function is irreversible i.e. the input for a given hash string cannot be produced from the output. 
The function maps the input and output in one-to-one fashion. I.e. a given output can only be reproduced by the same input.
The commonly used hash function is SHA-256
Example:
The hash function used for example is SHA-256

SHA256(“**blockchain technologies**”) =>  afd63d45baadf7eaf2e9b861054f7b435ae5200d46bf4e145468dc38d1e110d7

SHA256(“**blockchain technologies.**”) => a16478e4c8f41d65a5eed3e336b21b1685e4c9b6277897e82a67097d8762ec14

It can be seen that a smaller change in the input has changed the output completely. 


