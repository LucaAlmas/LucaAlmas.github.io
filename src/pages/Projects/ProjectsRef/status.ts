export const Status = {
    InDevelopment: "In sviluppo",
    ToBeReleased: "Da rilasciare",
    Released: "Rilasciato"
} as const;

export type Status = (typeof Status)[keyof typeof Status];
