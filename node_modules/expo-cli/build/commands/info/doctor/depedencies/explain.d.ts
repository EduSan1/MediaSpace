import { RootNodePackage, VersionSpec } from './explain.types';
declare type TargetPackage = {
    name: string;
    version?: VersionSpec;
};
/** Spawn `npm explain [name] --json` and return the parsed JSON. Returns `null` if the requested package is not installed. */
export declare function explainAsync(packageName: string, parameters?: string[]): Promise<RootNodePackage[] | null>;
/**
 * @param pkg
 * @returns true if all versions of the package satisfy the constraints
 */
export declare function warnAboutDeepDependenciesAsync(pkg: TargetPackage): Promise<boolean>;
export declare function organizeExplanations(pkg: TargetPackage, { explanations, isValid, }: {
    explanations: RootNodePackage[];
    isValid: (pkg: TargetPackage) => boolean;
}): {
    valid: RootNodePackage[];
    invalid: RootNodePackage[];
};
/**
 * @param pkg
 * @param explanations
 * @returns true if all versions of the package satisfy the constraints
 */
export declare function printExplanationsAsync(pkg: TargetPackage, explanations: RootNodePackage[]): Promise<boolean>;
export {};
