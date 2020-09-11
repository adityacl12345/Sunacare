/**
 * BLOCK: newcontent
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// PART 1: Import dependencies
import './style.scss';
import './editor.scss';
import {
    RichText,
    MediaUpload,
    BlockControls,
    AlignmentToolbar
} from "@wordpress/block-editor";

// PART 2: Setup references to external functions
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// PART 3: Register the block!
registerBlockType( 'cgb/block-newcontent', {
  
  // Part 3.1: Block settings
  title: __( 'Custom - CGB Block' ),
  icon: 'email-alt',
  category: 'common',
  keywords: [
    __( 'Custom &mdash; CGB Block' ),
    __( 'CGB Example' ),
    __( 'create-guten-block' ),
  ],
  attributes: {
    title: {
        type: "array",
        source: "children",
        selector: ".callout-title"
    }
  },
  
  // PART 3.2: Markup in editor
  edit: function( props ) {
	const {
        attributes: { title },
        setAttributes
    } = props;

    const onChangeTitle = value => {
		setAttributes({ title: value });
	};
	
    return (
		<div className={props.className}>
			<p>Sign up for newsletters.</p>
			<RichText
				tagName="h2"
				className="callout-title"
				placeholder={__("Write a callout title…")}
				value={title}
				onChange={onChangeTitle}
			/>
		</div>
	);
  },
  
  // PART 3.3: Markup saved to database
  save: function( props ) {
	const {
        attributes: { title }
    } = props;
    return (
		<div className={props.className}>
			<p>Sign up for newsletters.</p>
			<RichText.Content
				tagName="h2"
				className="callout-title"
				value={title}
			/>
		</div>
    );
  },
} );