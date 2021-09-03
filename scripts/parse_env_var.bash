#!/bin/bash

if [ -f .env ]
then
    cat .env | grep $1= | cut -d '=' -f2
else
    echo ".env file does not exist"
fi
