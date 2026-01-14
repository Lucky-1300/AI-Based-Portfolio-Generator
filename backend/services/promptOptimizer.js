class PromptOptimizer {
  optimize(prompt) {
    // Basic prompt optimization
    let optimized = prompt.trim();

    // Add context if missing
    if (!optimized.toLowerCase().includes('professional')) {
      optimized = `Professional context: ${optimized}`;
    }

    // Ensure clarity
    optimized = optimized.replace(/\s+/g, ' ');

    return optimized;
  }
}

export const promptOptimizer = new PromptOptimizer();
