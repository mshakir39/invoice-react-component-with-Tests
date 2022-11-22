#!/usr/bin/env bash
set -x

usage() {
  echo "USAGE: $0 <component type> <component name>"
  echo "EXAMPLE: $0 page some-page-name"
  exit 1
}

if [ $# -lt 2 ]; then
    usage
fi

if [ -z "$1" ] || [ -z "$2" ]; then
  usage
fi

npx nx workspace-generator cupola-component "$1" "$2"
