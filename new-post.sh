#!/bin/bash
<<ARGUMENTS
$1 -> Title surrounded in quotes ex: "My Markdown File"
$2 -> Destination file path including ending back slash ex: "./path/to/destination/"
ARGUMENTS

formattedDate=`date +'%Y-%m-%d'`
file=$formattedDate-$1.md
echo $1
echo $2
echo $3
echo $4

if [ ! -d "$2" ]; then # Check if directory exists
  echo $2 "does not exist"
  exit 1
elif [ -f "$2$file" ]; then # Check if file already exists in that directory
  echo $file "already exists in" $2
  exit 1
fi

## Create file and append these base lines to it

cat <<EOF >> "$2$file"
---
title: $1
date: `date +'%Y-%m-%d %H:%M:%S'` -0400
---
EOF
echo "Created file" $file

exit 0
