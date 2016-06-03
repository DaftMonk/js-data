export const anyOfTests = [
  {
    'description': 'anyOf',
    'schema': {
      'anyOf': [
        {
          'type': 'integer'
        },
        {
          'minimum': 2
        }
      ]
    },
    'tests': [
      {
        'description': 'first anyOf valid',
        'data': 1,
        'valid': true
      },
      {
        'description': 'second anyOf valid',
        'data': 2.5,
        'valid': true
      },
      {
        'description': 'both anyOf valid',
        'data': 3,
        'valid': true
      },
      {
        'description': 'neither anyOf valid',
        'data': 1.5,
        'valid': false
      }
    ]
  },
  {
    'description': 'anyOf with base schema',
    'schema': {
      'type': 'string',
      'anyOf': [
        {
          'maxLength': 2
        },
        {
          'minLength': 4
        }
      ]
    },
    'tests': [
      {
        'description': 'mismatch base schema',
        'data': 3,
        'valid': false
      },
      {
        'description': 'one anyOf valid',
        'data': 'foobar',
        'valid': true
      },
      {
        'description': 'both anyOf invalid',
        'data': 'foo',
        'valid': false
      }
    ]
  }
]
