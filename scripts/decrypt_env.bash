#!/bin/bash

if [ -f .env.enc ]
then
    gcloud kms decrypt \
    --ciphertext-file=.env.enc \
    --plaintext-file=.env \
    --location=global \
    --keyring=cloudbuild-env \
    --key=cloudbuild-env 
else
    echo ".env file not found"
fi