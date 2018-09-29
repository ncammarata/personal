parcel build index.html --public-url / --out-dir built --no-minify
cp built/index.html built/200.html
surge ./built nickcammarata.com
