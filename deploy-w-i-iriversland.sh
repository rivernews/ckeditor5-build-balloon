git_commit_msg=

if [[ $1 == '' ]]
then
    git_commit_msg=fix
else
    git_commit_msg="$1"
fi

git add . && git commit -m "$git_commit_msg" && git push && \
npm run build && \
cp build/ckeditor.js ../iriversland2/frontend/src/assets/ckeditor.js && \
echo SUCCESS && return

echo ERROR: see above message.