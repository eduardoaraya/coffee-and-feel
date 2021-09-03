#!/bin/bash

if [ -f .env ]
then
    gcloud kms decrypt \
    --ciphertext-file=.env.enc
    --plaintext-file=.env
    --location=global
    --keyring=cloudbuild-env
    --key=cloudbuild-env