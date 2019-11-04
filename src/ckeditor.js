/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
// import Embed from 'ckeditor5-embed/src/embed';
import InsertUrlImage from './insert-image-by-url/insert-image-by-url';
import KeyboardShortcuts from './keyboard-shortcut/keyboard-shortcuts';

export default class CustomBalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
CustomBalloonEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	// CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	Strikethrough,
	Code,
	Alignment,
	// Embed,
	InsertUrlImage,
	MediaEmbed,
	Paragraph,
	// PasteFromOffice,
	Table,
	TableToolbar,
	KeyboardShortcuts
];

// Editor configuration.
CustomBalloonEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'blockQuote',
			'strikethrough',
			'code',
			'|',
			'bold',
			'italic',
			'bulletedList',
			'numberedList',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'insertUrlImage',
			'mediaEmbed',
			'|',
			'link'
		]
	},

	heading: {
		options: [
			/** Customizing headings: https://docs.ckeditor.com/ckeditor5/latest/features/headings.html#configuring-heading-levels */
			{
				model: 'paragraph',
				title: 'Paragraph',
				view: { name: 'p', classes: '' },
				priority: 'high'
			},
			{
				model: 'heading1',
				view: { name: 'h1', classes: '' },
				title: 'Heading 1',
				priority: 'high'
			},
			{
				model: 'heading2',
				view: { name: 'h2', classes: '' },
				title: 'Heading 2',
				priority: 'high'
			},
			{
				model: 'heading3',
				view: { name: 'h3', classes: '' },
				title: 'Heading 3',
				priority: 'high'
			},
			{
				model: 'heading4',
				view: { name: 'h4', classes: '' },
				title: 'Heading 4',
				priority: 'high'
			}
		]
	},

	alignment: {
		options: [ 'left', 'right', 'center', 'justify' ]
	},

	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},

	link: {
		decorators: {
			addTargetToLinks: {
				mode: 'automatic',
				callback: url => (

					/* create external links for
                        http://google.com, https://google.com and //google.com
                    */
					/^(https?:)?\/\//.test( url ) &&

                    /* create external links for google.com,
                        but not for /google.com.
                        
                        Internal page is defined by an url started by `/...`; otherwise we treat url as external.

                        This requires all internal url to specify its full relative path against hostname.
                    */
                    !/^\/[^/]/.test( url )
				),
				// label: 'Open in new tab', /* only needed when in manual mode */
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}
	},

	table: {
		contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
