const postfix = {
  SUCCESS: '_SUCCESS',
  FAIL: '_FAIL'
};

export function createActions(name) {
  return [
    `${name}`,
    `${name}${postfix.SUCCESS}`,
    `${name}${postfix.FAIL}`
  ];
}

export class ActionCreator {
  constructor(actionName='UNKNOWN') {
    this.actionName = actionName;
  }

  request = (data) => {
    return {
      type: `${this.actionName}`,
      payload: data
    };
  };

  success = (payload) => {
    return {
      type: `${this.actionName}${postfix.SUCCESS}`,
      payload
    };
  };

  fail = (error) => {
    return {
      type: `${this.actionName}${postfix.FAIL}`,
      error
    };
  }
}
