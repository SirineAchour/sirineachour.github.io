#!/usr/bin/env bash
echo "here"
set -eu
echo "here 2"
repo_uri="https://x-access-token:${GITHUB_TOKEN}@github.com/sirineachour.github.io.git"
remote_name="origin"
main_branch="main"
target_branch="gh-pages"
build_dir="docs"

cd "${GITHUB_WORKSPACE}"

echo "GITHUB_ACTOR"
echo ${GITHUB_ACTOR}
echo "GITHUB_WORKSPACE"
echo ${GITHUB_WORKSPACE}
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@bots.github.com"

git branch
git stash
git checkout "$target_branch"
git rebase "$remote_name/$main_branch"

echo "about to run build"
npm run build
echo "done building"
git add "$build_dir"

git commit -m "updated GitHub Pages"
if [ $? -ne 0 ]; then
    echo "nothing to commit"
    exit 0
fi

git remote set-url "$remote_name" "$repo_uri" # includes access token
git push --force-with-lease "$remote_name" "$target_branch"
