git_commit_msg=

if [[ $1 == '' ]]
then
    git_commit_msg=fix
else
    git_commit_msg="$1"
fi

if [[ $2 == 'wo-build' ]]
then
    npm_build=
else
    npm_build="npm run build"
fi

eval $npm_build && \
git add . && git commit -m "$git_commit_msg" && git push && \
cp build/ckeditor.js ../iriversland2/frontend/src/assets/ckeditor.js && \
echo SUCCESS && return

echo ERROR: see above message.