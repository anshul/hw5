import React from 'react';
import t from 'tcomb-form';
import 'react-select/dist/react-select.css';

import s from './styles';

class ReactSelect extends t.form.Select {
  getTemplate() {
    return locals => {
      // handle error status
      let className = 'form-group';
      if (locals.hasError) {
        className += ' has-error';
      }

      return (
        <div className={className}>
          <label htmlFor={locals.attrs.name} className="control-label">
            {locals.label}
          </label>
          <s.MultiSelect
            multi
            simpleValue
            name={locals.attrs.name}
            value={locals.value}
            options={locals.options}
            onChange={locals.onChange}
            clearable={false}
            labelKey="text"
            className={locals.attrs.className}
          />
        </div>
      );
    };
  }
}

export default ReactSelect;
