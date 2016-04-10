#!/bin/bash -e

babel=node_modules/.bin/babel
webpack=node_modules/.bin/webpack

rm -rf lib

$babel -d lib ./modules
find -X lib -type d -name __tests__ | xargs rm -rf
