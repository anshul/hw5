import types from '../action_types';

const onSettingsSubmit = (formObj = []) => ({
  type: types.ADD_PLAYERS,
  payload: formObj,
});

export { onSettingsSubmit };
