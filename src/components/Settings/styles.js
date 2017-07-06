import Select from 'react-select';
import styled from 'styled-components';

const styles = {};

styles.MultiSelect = styled(Select)`
	&.Select--multi  {
		
		.Select-control{
			border: none;
		}

		.Select-value {
			display: inline-flex;
			align-items: center;
			background: none;
			border: none;

			font: 12px/13px arial;
			margin: 7px 2px;
			color: #72727d;
			// padding: 3px 20px 4px 6px;
			padding: 3px 5px 4px 0;
			cursor: pointer;
			position: relative;
			vertical-align: middle;
			flex-direction: row-reverse;
			border-radius: 3px;

			&:hover{
				background: #f1f1f2;

				.Select-value-icon{
					background: #f1f1f2 url(https://img2.shaadi.com/community/my-shaadi/close-hover.png) no-repeat 97% center;
				}
			}
		}

		.Select-value-icon{
			background: url(https://img2.shaadi.com/community/my-shaadi/close-default.png) no-repeat 97% center;
			border: none;
			text-indent: 100%;
		    white-space: nowrap;
		    overflow: hidden;

		    &:hover{
				background: #f1f1f2 url(https://img2.shaadi.com/community/my-shaadi/close-hover.png) no-repeat 97% center;
			}
		}

		.Select-arrow-zone{
			background:#f0f0f0;
			min-height: 33px;
			width: 33px;
			height: auto;
			overflow: hidden;
			cursor: pointer;
			padding: 0;

			&:hover{
				.Select-arrow{
					border-color: #a2a2a2 transparent transparent;
				}
			}
		}

		.Select-arrow{
			border-color: #a2a2a2 transparent transparent;

			&:hover{
				border-color: #a2a2a2 transparent transparent;
			}
		}

		.is_open > .Select-control .Select-arrow{
			border-color: transparent transparent #a2a2a2;

			&:hover{
				border-color: transparent transparent #a2a2a2;
			}
		}

		.Select-option, .Select-option.is-focused{
			border: 1px solid #fff;
			border-radius: 3px;
			background: #fff;
			color: #72727d;
			margin: 0 2px;
			font: 12px/24px arial;
			padding: 0 0 0 15px;
		}

		.Select-option.is-focused{
			border: 1px solid #cdced1;
		}
	}
`;

export default styles;
