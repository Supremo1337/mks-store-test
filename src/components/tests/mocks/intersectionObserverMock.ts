class MockIntersectionObserver implements IntersectionObserver {
  root: Element | null;
  rootMargin: string;
  thresholds: ReadonlyArray<number>;

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.callback = callback;
    this.root = (options?.root as Element) || null;
    this.rootMargin = options?.rootMargin || "0px";
    this.thresholds =
      options?.threshold !== undefined
        ? Array.isArray(options.threshold)
          ? options.threshold
          : [options.threshold]
        : [0];
  }

  callback: IntersectionObserverCallback;

  observe(target: Element): void {
    this.callback(
      [{ isIntersecting: true, target }] as IntersectionObserverEntry[],
      this
    );
  }

  unobserve(target: Element): void {
    // no-op
  }

  disconnect(): void {
    // no-op
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;
