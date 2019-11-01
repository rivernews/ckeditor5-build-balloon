## Logics for this forked repo

### How to update upstream

You first have to set up upstream repo.

```

git remote add upstream https://github.com/ckeditor/ckeditor5-build-balloon.git
git fetch upstream
git checkout master # this repo's master
git merge upstream/stable

```


### How to publish to npm

- [See this post.](https://hackernoon.com/how-to-publish-your-package-on-npm-7fc1f5aae600)
- If failed in Angualr, consider build ckeditor using es5. [See instructions.](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#option-building-to-es5-target)

## Documentation

The balloon editor build for CKEditor 5. Read more about the [balloon editor build](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/overview.html#balloon-editor) and see the [demo](https://ckeditor.com/docs/ckeditor5/latest/examples/builds/balloon-editor.html).

See the details at [ckeditor repo](https://github.com/ckeditor/ckeditor5-build-balloon).

See:

* [Installation](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installation.html) for how to install this package and what it contains.
* [Basic API](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/basic-api.html) for how to create an editor and interact with it.
* [Configuration](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/configuration.html) for how to configure the editor.
* [Creating custom builds](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html) for how to customize the build (configure and rebuild the editor bundle).

## Quick start

See details at [ckeditor 5 repo](https://github.com/ckeditor/ckeditor5-build-balloon).

**Note:** If you are planning to integrate CKEditor 5 deep into your application, it is actually more convenient and recommended to install and import the source modules directly (like it happens in `ckeditor.js`). Read more in the [Advanced setup guide](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html).

## License

See the details at [ckeditor repo](https://github.com/ckeditor/ckeditor5-build-balloon).