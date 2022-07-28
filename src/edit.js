/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will rendesr when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			{ __( 'Block Post hello from the editor!', 'block-post' ) }
			<div className="container">
				<div className="accordion">
					<div className="option">
					<input type="checkbox" id="toggle1" className="toggle" />
				  <label className="title" for="toggle1">Hello There!
					</label>
					<div className="content">
						<p>Hi, how is it going? </p>
					</div>
					</div>

					<div className="option">
					<input type="checkbox" id="toggle2" className="toggle" />
					<label className="title" for="toggle2">
						Not too bad, you?
					</label>
					<div className="content">
						<p> Yeah, I'm good thanks</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
}
