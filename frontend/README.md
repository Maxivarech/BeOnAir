# Repository du Frontend de notre Projet BeOnAir du cours de Web3

Auteur: 

[Sacha Norden](https://github.com/SachaNorden)

[Louis Vanbel]()

[Paul Vande Casteele](https://github.com/PaulVdc)

[Maxence Van Grunderbeeck](https://github.com/haemos0)

[Maxime Van Rechem](https://github.com/Maxivarech)


**But fonctionnel de l'application**

Pour notre projet, nous avons developpé deux sites identiques, le premier en utilisant le framework standard Reactet le deuxième en utilisant le framework NextJs. Ceci nous a notamment permis de mettre en gros plan les avantages du framework NextJs par rapport à React.

**Architecture et type de rendu (rendering)**

Les deux versions de notre application, que ce soit celle en React ou celle en NextJs, utilisent l'architecture SPA (single page application).

La version de l'application développée en React effectue notamment du client side rendering (CSR) tant dis que celle developpée en NextJs fait du pre-rendering dont du Static-site Generation (SSG) ou Static Generation et du Server Side Rendering (SSR), elle fait également du client side rendering (CSR).


**Dépendance**

Pour exécuter le frontend de l'application, il est primordial de lancer l'exécution du [backend](https://github.com/Maxivarech/BeOnAir_backend).

**Version NextJs (nextjsreactapp)**

```
git clone "https://github.com/Maxivarech/BeOnAir"
cd nextjsreactapp
npm install

```
_mode dev_
```
npm run dev

```
_mode compilé (build)_

```

npm run build
npm start

```

**Version React Standard (standardreactapp)**

```
git clone "https://github.com/Maxivarech/BeOnAir"
cd standardreactapp
npm install
npm start
```
