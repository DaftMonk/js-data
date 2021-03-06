export const patternTests = [
  {
    'description': 'pattern validation',
    'schema': { 'pattern': '^a*$' },
    'tests': [
      {
        'description': 'a matching pattern is valid',
        'data': 'aaa',
        'valid': true
      },
      {
        'description': 'a non-matching pattern is invalid',
        'data': 'abc',
        'valid': false
      },
      {
        'description': 'ignores non-strings',
        'data': true,
        'valid': true
      }
    ]
  },
  {
    'description': 'pattern is not anchored',
    'schema': { 'pattern': 'a+' },
    'tests': [
      {
        'description': 'matches a substring',
        'data': 'xxaayy',
        'valid': true
      }
    ]
  }
]
