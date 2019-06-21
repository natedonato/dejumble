# DEJUMBLE.js
[WIP Live Demo](https://natedonato.com/dejumble) 

  Dejumble.js is a web app to help solve the Jumble (the word game as seen in newspapers and [here online](https://www.jumble.com/)).  It uses a custom version of a word dictionary found [on github](https://github.com/dwyl/english-words/) to check if a given string is a valid english language word (the dictionary contains over 450,000 words).
  
  Example of a typical newspaper jumble puzzle:
    <img src="https://raw.githubusercontent.com/natedonato/dejumble/master/jumbleimages/jumble2.jpg" > 

## Building the Dictionary
  Dejumble.js uses many optimizations to ensure it can solve puzzles as quickly and efficiently as possible.
  
  To optimize a single word solve Dejumble uses a precomputed dictionary of sorted words.  The initial creation of the sorted dictionary was an expensive operation, iterating through and sorting over 540 thousand words.  However it was well worth the time to build since it can be saved to a static file, optimizing all future dejumbles by a significant margin.
  
  Instead of checking the original English dictionary for every possible permutation of a given set of characters, Dejumble can sort a string by character and then keys just once in the custom sorted word dictionary to check for valid unscrambles.  Keying into a dictionary/hash to check for inclusion or validity is a speedy O(1) operation. Building every permutation for the string would take O(n!) time though, whereas sorting the string using mergesort takes only O(n log n) time, marking a significant improvement.  Since the final jumble will involve a high number of possible individual dejumbles it is very important that each individual dejumble be as streamlined as possible.
 
  The program still must load the entire dictionary which is about 6.5 MB in size.
  
## Final Jumble
  WORK IN PROGRESS
  The final jumble is usually built of multiple words in a single longer jumbled phrase, which is significantly more complex to solve than an individual word jumble.
  The current working strategy: 
  1) generate all possible combinations of characters of equal length to the first word (unordered, which is a significant upgrade over all possible ordered permutations).
  2) filter these combinations to only those that dejumble to a valid word
  3) for each valid word, get the left over characters and recursively repeat the process on a subset of characters with the next word length
 This will have at least an O(n!) time to calculate combinations, but I don't see any other posibilities as of right now to further reduce this.
