import { User } from "firebase/auth";
import { create } from "zustand";

// type User = {
//   uid: string;
//   email: string | null;
//   displayName: string | null;
// };

type State = {
  user: User | null;
  likes: string[];
};

type Action = {
  setUser: (user: User | null) => void;
  addLike: (url: string) => void;
  removeLike: (url: string) => void;
};

const useUser = create<State & Action>((set, get) => ({
  user: null,
  likes: [],
  setUser: (user) => set({ user }),
  addLike: (url) => set({ likes: [...get().likes, url] }),
  removeLike: (url) => set({ likes: get().likes.filter((u) => u != url) }),
}));

export default useUser;
