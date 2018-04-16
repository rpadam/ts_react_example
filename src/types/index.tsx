export interface EnthusiasmState {
    languageName: string;
    enthusiasmLevel: number;
}

export interface ToggleState {
    isOn: boolean;
}

export interface CounterState {
    count: number;
}

export interface ApplicationState {
    enthusiasm?: EnthusiasmState;
    toggleState?: ToggleState;
}