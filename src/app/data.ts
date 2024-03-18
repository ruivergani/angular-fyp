export function random(max: number): number {
  return Math.round(Math.random() * 1000) % max;
}

const FirstWords: string[] = [
  "apple", "banana", "cherry", "date", "fig", "grape", "honeydew", "kiwi", "lemon", "mango",
  "orange", "pear", "quince", "raspberry", "strawberry", "tangerine", "watermelon"
];

const Colors: string[] = [
  "red", "yellow", "blue", "green", "pink", "brown", "purple", "gray", "white", "black", "orange"
];

const LastWords: string[] = [
  "adventure", "beauty", "creativity", "discovery", "elegance", "freedom", "happiness", "imagination", "joy",
  "knowledge", "laughter", "mystery", "passion", "serenity", "transformation", "victory", "wonder"
];

export function buildData(count: number): { id: number, value: string, recentlyUpdated: boolean }[] {
  let nextId = 0;
  const data: { id: number, value: string, recentlyUpdated: boolean }[] = new Array(count);
  for (let i = 0; i < count; i++) {
    data[i] = {
      id: nextId++,
      value: `${FirstWords[random(FirstWords.length)]} ${Colors[random(Colors.length)]} ${LastWords[random(LastWords.length)]}`,
      recentlyUpdated: false,
    };
  }
  return data;
}
