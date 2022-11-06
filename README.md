# Proof of passion for Blockchain technologies
### Day 34
#### <ins>**Nakamoto consensus**</ins>
It was illustrated in the bitcoin whitepaper. The idea is that the voting does not depend on the number of majority nodes but rather depends on the computational power. It essentially prevents the Sybil attack. The paper introduces a concept proof of work that tells about a problem that is hard to solve but easy to validate. When a node solves the puzzle it broadcasts a new block to the entire network and every node comes to a consensus. But the new blocks propagate through the network at different speeds which might cause some of the nodes with different latest nodes. But eventually, everybody comes to the right consensus because they trust the longest chain. 


### Day 33
#### <ins>**Our solution to millionaire's problem**</ins>
Our solution is the simpleset solution to millionair’s problem. Divide the networths into slabs of equal window. For each slab there is a half fold paper. One party will mark tick on only one half fold paper and arrange these papers in a sequence of slabs. All papers are empty only one has a tick on its bottom and it is hidden from the other party. The other party will mark tick and cross in all of the half fold papers in such a way that he will mark continuous ticks to his respective slab and will mark cross to uppar slabs to its networth and they are hidden to first party. Now all the folds are randomly mixed and only fetch the paper with tick on the bottom and destroy rest of the papers. Now if this paper has a tick that means the second party has equal or greater net worth and if there is a cross inside the half fold paper that means the second party has net worth less that the first party. 


### Day 32
#### <ins>**Millionaire's problem**</ins>
Millionaire's problem is the classical problem of secure multiparty computation. The problem is defined as there are two millionaires bet on each other. One of them has to offer a dinner that has more net worth than the other one without revealing their actual net worth. Furthermore they don’t want to rely on any third person to whom they disclose their networths. There should be some function that should compute something like following,  
p = F(a, b)  
p must be true if a>=b and false otherwise  
  
Inputs ‘a’ and ‘b’ must not reveal actual networth of any of the party


### Day 31
#### <ins>**Secure Multiparty computation**</ins>
SMC is the subfiled of cryptography. The idea is multiple parties can compute something with their inputs without relying on third party while keeping their inputs private. Let’s say there is a  function that do some operations on the given inputs and compute some output. The inputs are encrypted and no one can decrypt the input except the one who has encrypted the inputs. But the function is capable of computing the certain operations on the encrypted inputs. For example let’s say, there are three parties X, Y and Z with their inputs x, y and z respectively
They’ll compute the function to get an output for their inputs but the input will be private to other parties.  

p = F(x, y, z)


### Day 30
#### <ins>**Zero knowledge proof**</ins>
Zero knowledge proof in classical computer science is the idea to prove that someone has the knowledge but without revealing the actual knowledge. ZKP has two types namely interactive and noninteractive. In interactive ZKP two parties interact iteratively until a sound conclusion is drawn that a party has certain knowledge without revealing the actual knowledge to another party. But this has to be repeated whenever one party has to prove its knowledge to another party. In noninteractive ZKP the computation for proof is held only once. In some cases, it becomes infeasible to give proof to everybody by repeating the same process of computations. One thing more the ZKP does not completely make the probability of fraud to zero but it reduces the probability approaches to zero by having more computations such that it is extremely less probable to trick the system. 

### Day 29
#### <ins>**Sybil Attack**</ins>
Sybil's attack is a malicious attack on a p2p network. The idea is to have duplicate accounts of an attacker such that it makes it difficult for the system to determine the actual number of the user. The attack more commonly occurs on a p2p network system and it tries to take over the system. In blockchain, 51% attacks could be caused by the Sybil attack by sending invalid transactions and having multiple replicated malicious nodes to falsely approve and validate the invalid transaction. 

### Day 28
#### <ins>**Bitcoin blockchain**</ins>
Bitcoin was the first realization of blockchain technology. Bitcoin is the first real decentralized network that solved the Byzantine generals' problem of game theory. But one thing must be mentioned the blockchain is not Bitcoin. Blockchain is the underlying technology that Bitcoin use. Bitcoin is a digital currency and is considered the first generation of blockchain. It is the decentralized system that keeps track of a certain amount of bitcoins in and out. Bitcoin uses the proof of work as its consensus protocol. It also has low-level scripting language that proved to be the basis of second-generation blockchain which found the Ethereum smart contracts. 


### Day 27
#### <ins>**Block header**</ins>
Blockchain is the sequence of blocks containing transaction data and proof of work of nodes. Each block roughly consists of three parts including the previous block hash, data, and current block hash. As the blockchain size keep on increasing with time it gets hard to download all blockchain for transaction validation and the smaller devices are unable to download the complete blockchain for validation. Hence they need to download the block headers. Download only the branch of transactions that contains the transaction to be validated. The block header contains the following information,  
1. Previous block hash
2. The root hash of Merkle tree
3. The current hash of a block
4. The nonce
5. Timestamp
6. difficulty


### Day 26
#### <ins>**Markov’s chain**</ins>
Markov’s chain in mathematics is the system that is used to represents sequence of states. One of the main property of Markov’s chain is that it’s memoryless that. That means to move to the next state it depends only on current state irrespective of how it comes to the current state. It is a probabilistic model and transition from any state to other state has a certain probability. Markov’s chain is a probabilistic model that can also be represented and solved using calculus. Gambler’s ruin problem in blockchain can also be represented and evaluated using Markov’s chain. 

### Day 25
#### <ins>**Gambler’s ruin problem**</ins>
The gambler’s ruin problem is the classic statistical problem which is to find the probability that a gambler will win all the wealth ‘k’ with his initial wealth of ‘i’ and start at any point of time ‘n’ and will play indefinitely until he wins or lose all of his wealth. It essentially ends up with success by gaining all wealth ‘k’ or 0 wealth and hence it’s called The Gambler’s ruin problem. The problem is mentioned in the Bitcoin white paper to calculate the probability that the attacker will win against the system and it reduces to nearly zero when more nodes are attached to the system. 

### Day 24
#### <ins>**Merkle Tree**</ins>
Merkle tree is a binary hash tree. Like other trees, the Merkle tree has a root node, intermediate nodes, and leaf nodes. The leaf nodes are data nodes and the other nodes are calculated using a hash function. The height of the tree depends upon the number of data nodes that is leaf nodes. By combining every two nodes and passing it to the hash function and going on to the top until a root hash is calculated. The tree is used for transaction validations as well. The hash of the tree is the commitment and the leaf nodes are part of the commitment. The block header in every block contains the root hash of Merkle tree. 


### Day 23
#### <ins>**Byzantine fault tolerance**</ins>
Byzantine fault tolerance is the property of any system that keeps a decentralized system from falling into the Byzantine Generals' Problem. The idea is to keep the system functional and running even if some of the generals or nodes in the system do not respond or act maliciously. This property must be held in a decentralized system to work properly. 

### Day 22
#### <ins>**Byzantine generals problem**</ins>
The Byzantine generals problem is the classical game theory problem which is defined as there being many generals and they have to attack a city. If they all attack at the same time they will win or else they’ll lose. The constraint is that their medium of communication is not fully secure so they have to achieve trust in a trustless environment. Also, there are some traitor generals as well as honest generals. Traitor generals can send false messages to other generals. The Byzantine General's Problem occurs only in decentralized systems and it is not the problem in centralized systems. Bitcoin is the first realized solution to the problem and before it, there was no absolute solution to the problem in a decentralized system. Bitcoin solves this problem by consensus protocol. 

### Day 21
#### <ins>**51% attack**</ins>
In a blockchain network, every decision is made on a voting system. Every transaction is validated by every other node in the system but the new transaction can only become part of the ledger only if the majority of nodes validate it and accept it as a valid transaction. Hence the census is the main characteristic of a decentralized system an attack can only be succeeded if the attacker controls the 51% power of the network. 

### Day 20
#### <ins>**Longest chain rule**</ins>
This rule states that the longest chain in the blockchain network would be considered as the valid chain. When any node finds a new block the node then broadcasts the latest chain to every other node. Every node then validates this chain from block headers. If a malicious node is trying to mutate the original chain then this node must have the longest chain otherwise the network will keep on adding new blocks and the attacker then has to chase the rest of the network speed which is very much difficult to achieve. 


### Day 19
#### <ins>**Incentivisation**</ins>
The miner who mines the new block will be incentivized with mining rewards from thin air. In Bitcoin mining is the only way to generate new Bitcoins out of nowhere. It motivitate miners to compete with each other to participate in the security of blockchain and get rewards and it is the clever way to generate revenue instead of fooling the network. When Bitcoin was started the mining reward was 25 and it decreased over time by half i.e. 12.5 and now the current mining reward of Bitcoin is 6.25. The incentive model is used to generate new currency and it also welcomes new nodes to participate in the transactions and mining. After every 210,000 blocks or roughly after 4 years the mining reward cut into half.

### Day 18
#### <ins>**Dynamically adjusted target**</ins>
To solve the cryptographic puzzle a target is dynamically set. The generated hash of the new block must be less than this target. The target is updated every 2016 blocks in blockchain. And a block in Bitcoin is mined every 10 minutes so roughly the target is adjusted every 2 weeks.  

**new_target = old_target * (actual time took for 2016 blocks / 2016*10 minutes)**


### Day 17
#### <ins>**Difficulty**</ins>
Difficulty is defined by the network. It is the number of leading zeros in the hash guess puzzle. The idea is to guess the hash repeatedly until the output of the hash contains minimum leading zeros as defined by the difficulty. With increase in the number of leading zeros it gets harder to generate a hash from given data and guessed nonce that has sufficient number of zeros. So in summary with increase in difficulty more computational power required to mined the block. Increase in the difficulty reduces the window for hash guess. 

### Day 16
#### <ins>**Cryptographic Puzzle**</ins>
In order to add a new block into blockchain miners have to solve a cryptographic puzzle. The candidate block has the transactions data, previous block hash and timestamp. The idea is to guess a number that by combining with the block data will produce a hash for the block. The hash must be less than the dynamically adjusted target. The puzzle is a totally random try and test. To solve this puzzle miners have to use their computational power and hence they’ll prove their work. The one miner who will first solve the puzzle will be able to mined the new block into blockchain.  

**hash(data, previous hash, nonce) < target**  

The output of the hash function is totally unpredictable hence it is just a try and test puzzle. Solving a puzzle means finding the nonce that is an integer number that will produce a hash who’s value should be less than the dynamically adjusted target.  


### Day 15
#### <ins>**Proof-of-work**</ins>
PoW is one of the consensus algorithms that prevent malicious activities in the network and ensure the security of blockchain. In order to mine the candidate block, miners compete and solve a cryptographic puzzle by using their computational power. The nodes with more computation power are most likely to mined the block and in order to mined the block they have to prove that they used their computational power, hence it’s called proof-of-work. Only the winning node would be able to append a new block into the blockchain system and every other node will update their own copy of blockchain accordingly. The basic idea is to have an algorithm that has a problem which is difficult to solve but easy to validate that the node has worked hard to guess the right answer. And other nodes can validate their work without doing the same hard work but with very small computation.

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


