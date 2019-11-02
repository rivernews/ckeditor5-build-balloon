# A Custom Ckeditor5 Balloon Build

[Original upstream repository](https://github.com/ckeditor/ckeditor5-build-balloon).

The motivation to fork and create our own Ckeditor build is a better user experience. The needs are tailored to our own use case so I have no plan to create PR at least in the short term, but the UX principles behind these add-ons and improvement in this repo are universe. (see [the heuristics introduced by Nielsen](https://en.wikipedia.org/wiki/Heuristic_evaluation))  

That said, I'll fetch from upstream from time to time to ensure the core engine are up to date.

What did we add on top of the original Ckeditor upstream?
- Some official Ckeditor plugin that are not included in balloon editor 
    - Alignment
    - Strikethrough
    - Code
- Some useful plugins written by me
    - Add image by url
    - Keyborad shortcut: for headings, bullet points (strikethrough already built-in, ctrl+shift+x). In gernal following the keymap of Google Doc. Improvement based on the heuristics - **Flexibility and efficiency of use**.
- Some custom config to enpower the plugins and improve user experience ❤️️️️ 
    - Standard 4-level headings plus a paragraph.
    - Alignment options

## Relevant repository

- Our custom [Ckeditor balloon build](https://github.com/rivernews/ckeditor5-build-balloon). This Ckeditor React repository serves like an adapter between vanilla Ckeditor and the React framework, that means you can switch the vanilla Ckeditor5 part with any other variant you want - say it's the offical or somebody else custom build like me.
- User facing apps
    - [Appl Tracky](https://github.com/rivernews/appl-tracky-spa). Written in React, this frontend SPA uses this repo as a npm package with our custom balloon build mentioned above.
    - [Iriversland2](https://github.com/rivernews/iriversland2-spa) - my personal website which use Ckeditor. It's written in Angular so does not use this repo, but uses my custom build of Ckeditor balloon editor.

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
- How to create public, scoped package? `npm publish --access public`. [See this npm official page](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).
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