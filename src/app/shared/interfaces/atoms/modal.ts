import { ViewContainerRef } from "@angular/core";

export interface Modal {
    id:          string;
    name:        string;
    description: string;
    specs:       string[];
    conditions:  string[];
    icon:        string;
    redirection: boolean;
    status?:     boolean;
    accelerator?:boolean,
    close?:Function
}
