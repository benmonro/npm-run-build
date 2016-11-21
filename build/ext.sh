#! /bin/bash
for dir in ext/*; do
  echo "building $dir";
  (cd $dir && npm install && npm run build -- --watch &);
done
