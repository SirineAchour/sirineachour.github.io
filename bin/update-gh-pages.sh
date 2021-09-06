#!/usr/bin/env bash
set -eu

repo_uri="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_ACTOR}/sirineachour.github.io.git"
remote_name="origin"
main_branch="main"
target_branch="gh-pages"
build_dir="docs"

cd "${GITHUB_WORKSPACE}"


git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

echo "***about to show git stash"
git stash
echo "***done git stashing"

echo "***about to npm i"
npm i
echo "about to run build"
npm run build
echo "done building"

echo "gonna empty out kol chay"

echo "deleting all but docs"
rm -rfv !(docs|.git)
echo "done deleting"
ls -a
#git add "$build_dir"

#git add "$build_dir"

git add .
git commit -m "built + clean up"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token
#git push --force-with-lease "$remote_name" "$target_branch"
git push origin main:gh-pages --force
