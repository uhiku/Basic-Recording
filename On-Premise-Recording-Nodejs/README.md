#### Stop Recording

- `http://localhost:3000/recorder/v1/stop`
  
Method:

- POST

Parameters:
 

|Name|Mandatory|Type|Desc|
|:----    |:---|:----- |-----   |
|sid |Y  |string |sid when you start the recorder   |
|channel |Y  |string |channel which to stop recording   |

Sample Response:

```
{
    "success": true
}
```

Response Properties:

|Name|Type|Desc|
|:----|:----- |-----   |
|success  |bool |operation result   |

## Resources
- See full API documentation in the [Document Center](https://docs.agora.io/en/)
- [File bugs about this sample](https://github.com/AgoraIO/Basic-Recording/issues)
- See [detailed Agora Linux Recording guides](https://docs.agora.io/en/2.3.1/addons/Recording/Quickstart%20Guide/recording_cpp?platform=C%2B%2B)

## License
This software is licensed under the MIT License (MIT). [View the license](LICENSE.md).
