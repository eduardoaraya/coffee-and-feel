#!/bin/bash

if [ -f .env ]
then
    gcloud kms encrypt \
  --plaintext-file=.env \
  --ciphertext-file=.env.enc \
  --location=global \
  --keyring=cloudbuild-env \
  --key=cloudbuild-env
else
    echo ".env file not found"
fi