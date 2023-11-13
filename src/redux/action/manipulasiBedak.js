import { createSlice } from "@reduxjs/toolkit";

export const manipulasiBedak = createSlice({
  name: "KotakMakeUp",
  initialState: {
    jumlahmakeup: 10,
    namaBrand: "Lato-lato",
    Penerbit: "Sari Roti",
    listBedak: ["Bedak Tabur", "Bedak Foundation", "Bedak Halus"],
  },

  // membuat fungsi untuk memanipulasi data diatas
  reducers: {
    kurangMakeUp: (state) => {
      if (state.jumlahmakeup > 0) {
        state.jumlahmakeup = state.jumlahmakeup - 1;
      }
    },

    tambahMakeUp: (state) => {
      state.jumlahmakeup = state.jumlahmakeup + 1;
    },

    gantiBrand: (state, action) => {
      state.namaBrand = action.payload.namaBrand;
      state.Penerbit = action.payload.Penerbit;
    },

    // menambahkan elemen baru ke dalam list bedak
    tambahBedak: (state, action) => {
      state.listBedak.push(action.payload);
    },
    kurangBedak: (state, action) => {
      const hapusBedak = action.payload;
      state.listBedak = state.listBedak.filter((bedak) => bedak !== hapusBedak);
    },
  },
});

export const {
  kurangMakeUp,
  tambahMakeUp,
  gantiBrand,
  tambahBedak,
  kurangBedak,
} = manipulasiBedak.actions;

export default manipulasiBedak.reducer;
