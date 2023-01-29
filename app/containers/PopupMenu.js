import React from 'react'
import { Text, Image } from 'react-native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'

import { themes } from '../constants/colors'
import images from '../assets/images'

const PopupMenu = React.memo(
  ({ theme, options, renderTrigger }) => (
    <Menu>
      <MenuTrigger customStyles={{
        triggerOuterWrapper: {
          paddingVertical: 0,
          width: 40,
          flex: 1,
        },
        triggerTouchable: {
          underlayColor: 'transparent',
          style: {
            flex: 1,
          },
        },
        triggerWrapper: {
          alignItems: 'flex-end',
          justifyContent: 'center',
          flex: 1,
        },
      }}>
        {renderTrigger()}
      </MenuTrigger>
      <MenuOptions customStyles={{
        optionsContainer: {
          backgroundColor: themes[theme].popupBackground,
          width: 100,
          padding: 5,
        },
        optionTouchable: {
          underlayColor: themes[theme].itemPressedColor,
          activeOpacity: 70,
        },
        optionText: {
          color: 'brown',
        },
      }}>
        {options.map((item, key) => (
          <MenuOption key={key} onSelect={() => item.onPress()}>
            <Text style={{ color: item.danger ? 'red' : themes[theme].activeTintColor }}>{item.title}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  ),
)

export default PopupMenu
