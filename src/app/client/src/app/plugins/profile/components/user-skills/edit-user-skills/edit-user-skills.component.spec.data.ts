export const mockRes = {
    data: {
        userProfile: {
            'skills': [{
                'skillName': 'angular',
                'addedAt': '2017 - 11 - 22',
                'endorsersList': [{
                    'endorseDate': '2017 - 11 - 22',
                    'userId': 'd5efd1ab - 3cad-4034 - 8143 - 32c480f5cc9e'
                },
                {
                    'endorseDate': '2017 - 12 - 21',
                    'userId': '14df02ff-7e68 - 4c52-a600 - 1b1f30c62ffe'
                }
                ],
                'addedBy': 'd5efd1ab - 3cad-4034 - 8143 - 32c480f5cc9e',
                'endorsementcount': 1,
                'id': 'c8d47393ac484fa5e8ed9c3aa6b3e7d7486979b90a9e9128e0e3bd2037425baf',
                'skillNameToLowercase': 'angular',
                'userId': 'd5efd1ab - 3cad-4034 - 8143 - 32c480f5cc9e',
            }]
        }
    },
    response: {
        'id': 'api.user.update',
        'ver': 'v1',
        'ts': '2018-04-17 15:04:19:235+0000',
        'params': {
            'resmsgid': null,
            'msgid': '4c7397e9-3579-6d38-0751-d90ad4111c2a',
            'err': null,
            'status': 'success',
            'errmsg': null
        },
        'responseCode': 'OK',
        'result': {
            'response': 'SUCCESS'
        }
    },
    errorResponse: {
      'id': 'api.user.skill.update',
      'ver': 'v1',
      'ts': '2018-08-24 11:21:20:307+0000',
      'params': {
        'resmsgid': null,
        'msgid': '1ac88e3d-1992-963d-5c20-f84c98a28834',
        'err': 'MANDATORY_PARAMETER_MISSING',
        'status': 'MANDATORY_PARAMETER_MISSING',
        'errmsg': 'Mandatory parameter skills is missing.'
      },
      'responseCode': 'CLIENT_ERROR',
      'result': {}
    },
    getSkillsData : {
      'id': 'api.skills',
      'ver': 'v1',
      'ts': '2018-08-22 09:41:17:547+0000',
      'params': {
        'resmsgid': null,
        'msgid': 'ca524fc2-6051-a533-8eb8-84d4181b412a',
        'err': null,
        'status': 'success',
        'errmsg': null
      },
      'responseCode': 'OK',
      'result': {
        'skills': [
          'java',
          'test',
          'angular',
          'afjalskf',
          'asfajsfh',
          'asflashf',
          'asllfhsal',
          'as',
          'kafka',
          'akka'
        ]
      }
    },
    resourceBundle: {
        'frmelmnts': {
            'instn': {
                't0020': 'Start typing to add a skill'
            }
        },
        'messages': {
            'emsg': {
              'm0005': 'Some Unexpected Error Occured'
            },
            'smsg': {
                'm0038': 'Skills updated successfully'
            }
        }
    }
};
