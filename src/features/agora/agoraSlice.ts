import { Agoragram, AsteriResponseWithID } from './agoraTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from 'app/store';

interface AgoraState {
  agoragrams: Record<string, Agoragram>;
}

const initialState: AgoraState = {
  agoragrams: {},
};

export const agora = createSlice({
  initialState,
  name: 'agora',
  reducers: {
    getAgoragramsSuccess(state, action): void {
      action.payload.agoragrams.forEach((agoragram: Agoragram) => (state.agoragrams[agoragram._id] = agoragram));
      action.payload.starredAgoragrams?.forEach((_id: string) => (state.agoragrams[_id].isStarred = true));
    },
    starAgoragramSuccess(state, action: PayloadAction<AsteriResponseWithID>): void {
      state.agoragrams[action.payload.agoragramID].stars += action.payload.action === 'STARRED' ? 1 : -1;
      state.agoragrams[action.payload.agoragramID].isStarred = action.payload.action === 'STARRED' ? true : false;
    },
  },
});

export const { getAgoragramsSuccess, starAgoragramSuccess } = agora.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.auth.authenticated)`
export const selectAgoragramById = (state: RootState, id: string): Agoragram => state.agora.agoragrams[id];

export default agora.reducer;
