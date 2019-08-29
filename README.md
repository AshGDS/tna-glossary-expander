This repo contains a script used to make our research guide glossary terms more accessible. A user told us that it is hard to see when and where charges apply, or when you're  being redirected to a   new  supplier.
 
The script takes a glossary term with the innerText "£", and replaces it with the first sentence of the glossary term's title.
 
Example:
 
 `£` becomes `There will be a charge to view these records`.
 
The script then adds a click listener to the glossary term. When clicked, the  title of the glossary term is displayed using `window.alert`

# View the prototype

- [1939 Register](https://tna-glossary-expander.netlify.com/1939-register.html)

- [Alien arrivals](https://tna-glossary-expander.netlify.com/alien-arrivals.html)
