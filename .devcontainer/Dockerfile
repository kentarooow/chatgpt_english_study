FROM ubuntu:22.04

# ロケールやNode.js、必要ツールをインストール
RUN apt-get update && \
    apt-get install -y curl ca-certificates gnupg lsb-release && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs git && \
    npm install -g npm && \
    apt-get clean

# 作業ディレクトリ
WORKDIR /workspace
