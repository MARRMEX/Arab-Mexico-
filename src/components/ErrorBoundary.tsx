import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public props: Props;
  public state: State;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem('arab_mexico_guide_lang');
      }
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-950 text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-stone-900 border border-amber-400/30 rounded-3xl p-8 shadow-2xl">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-white mb-2">
              Arab Mexico Guide
            </h1>
            <p className="text-stone-300 text-sm mb-6 leading-relaxed">
              Ocurrió un problema temporal al cargar la página / An unexpected error occurred while loading the page.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Recargar Página / Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
