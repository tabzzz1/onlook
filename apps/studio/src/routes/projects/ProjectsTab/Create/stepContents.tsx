import type React from 'react';
import type { StepProps } from './index';
import { LoadSelectFolder } from './Load/SelectFolder';
import { LoadSetupProject } from './Load/Setup';
import { LoadSetUrl } from './Load/SetUrl';
import { LoadWarning } from './Load/Warning';
import { NewNameProject } from './New/Name';
import { NewSelectFolder } from './New/SelectFolder';
import { NewSetupProject } from './New/Setup';
import { withStepProps } from './withStepProps';

export interface StepContent {
    header: React.FC<StepProps>;
    content: React.FC<StepProps>;
    footerButtons: (props: StepProps) => React.ReactNode;
}

export const newProjectSteps: StepContent[] = [
    withStepProps(NewNameProject),
    withStepProps(NewSelectFolder),
    withStepProps(NewSetupProject),
];

export const loadProjectSteps: StepContent[] = [
    withStepProps(LoadWarning),
    withStepProps(LoadSelectFolder),
    withStepProps(LoadSetUrl),
    withStepProps(LoadSetupProject),
];
