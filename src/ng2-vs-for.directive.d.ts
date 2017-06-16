import { ViewContainerRef, TemplateRef, ElementRef, Renderer, EmbeddedViewRef, NgZone, ChangeDetectorRef } from '@angular/core';
export declare class VsFor {
    private _element;
    private _viewContainer;
    private _templateRef;
    private _renderer;
    private _ngZone;
    private _changeDetectorRef;
    _originalCollection: any[];
    _slicedCollection: any[];
    originalLength: number;
    before: HTMLElement;
    after: HTMLElement;
    view: EmbeddedViewRef<any>;
    parent: HTMLElement;
    tagName: string;
    __horizontal: boolean;
    __autoSize: boolean;
    __options: any;
    scrollParent: HTMLElement;
    clientSize: string;
    offsetSize: string;
    scrollPos: string;
    totalSize: number;
    sizesCumulative: number[];
    sizes: number[];
    elementSize: number;
    startIndex: number;
    endIndex: number;
    _prevStartIndex: number;
    _prevEndIndex: number;
    _minStartIndex: number;
    _maxEndIndex: number;
    onWindowResize: any;
    onZone: any;
    vsSize: any;
    vsOffsetBefore: number;
    vsOffsetAfter: number;
    vsExcess: number;
    vsScrollParent: string;
    vsAutoresize: boolean;
    originalCollection: any[];
    slicedCollection: any[];
    constructor(_element: ElementRef, _viewContainer: ViewContainerRef, _templateRef: TemplateRef<any>, _renderer: Renderer, _ngZone: NgZone, _changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(): void;
    postDigest(fn: () => void): void;
    initPlaceholders(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    refresh(): void;
    updateTotalSize(size: number): void;
    reinitialize(): void;
    setAutoSize(): void;
    updateInnerCollection(): boolean;
    _getOffset(index: number): number;
}
