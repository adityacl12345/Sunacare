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
    RichText
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
    },
    button: {
      type: "array",
      source: "children",
      selector: ".callout-button"
    }
  },
  
  // PART 3.2: Markup in editor
  edit: function( props ) {
	  const {
        attributes: { title, button },
        setAttributes
    } = props;

    const onChangeTitle = value => {
      setAttributes({ title: value });
    };
    const onChangeButton = value => {
      setAttributes({ button: value });
    };
	
    return (
      <div className={props.className}>
        <RichText
          tagName="p"
          className="callout-title"
          placeholder={__("Sign up text")}
          value={title}
          onChange={onChangeTitle}
        />
        <a className="CTABtn">
          <RichText
            tagName="span"
            className="callout-button"
            placeholder={__("Button text")}
            value={button}
            onChange={onChangeButton}
          />
        </a>
      </div>
    );
  },
  
  // PART 3.3: Markup saved to database
  save: function( props ) {
	  const {
        attributes: { title, button }
    } = props;
    return (
      <div className={props.className}>
        <RichText.Content
          tagName="p"
          className="callout-title"
          value={title}
        />
        <a className="CTABtn">
          <RichText.Content
            tagName="span"
            className="callout-button"
            value={button}
          />
        </a>
      </div>
    );
  },
});