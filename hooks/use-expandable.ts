import { useState } from 'react';

export function useExpandable() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const isExpanded = (index: number) => expandedItems.has(index);

  const expandAll = () => {
    // This could be used if you want to expand all items
    // Implementation would depend on knowing the total number of items
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return {
    expandedItems,
    toggleItem,
    isExpanded,
    expandAll,
    collapseAll,
  };
}
