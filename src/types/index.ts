// Styles

import { GestureResponderEvent, NativeScrollEvent, NativeSyntheticEvent, RefreshControlProps, ScrollViewPropsAndroid, ScrollViewPropsIOS, StyleProp, TextStyle, Touchable, ViewProps, ViewStyle } from 'react-native';

export type FlexJustifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type FlexDirectionType =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse';

export type TxtSty = StyleProp<TextStyle>;

export type VariantTypes<T> = keyof NonNullable<T>;

export type TouchableType =
  | ((event: GestureResponderEvent) => void)
  | undefined;

export type ViewType = 
  | 'view'
  | 'scrollView'
  | undefined ;

export const layoutStyles = {
        'p': 'padding',
        'pl': 'paddingLeft',
        'pr': 'paddingRight',
        'pb': 'paddingBottom',
        'pt': 'paddingTop',
        'px': 'paddingHorizotal',
        'py': 'paddingVertical',
        'm': 'margin',
        'ml': 'marginLeft',
        'mr': 'marginRight',
        'mb': 'marginBottom',
        'mt': 'marginTop',
        'mx': 'marginHorizotal',
        'my': 'marginVertical',
    };

export interface ScrollViewProps extends ViewProps, ScrollViewPropsIOS, ScrollViewPropsAndroid, Touchable {
    /**
     * These styles will be applied to the scroll view content container which
     * wraps all of the child views. Example:
     *
     *   return (
     *     <ScrollView contentContainerStyle={styles.contentContainer}>
     *     </ScrollView>
     *   );
     *   ...
     *   const styles = StyleSheet.create({
     *     contentContainer: {
     *       paddingVertical: 20
     *     }
     *   });
     */
    contentContainerStyle?: StyleProp<ViewStyle>;

    /**
     * When true the scroll view's children are arranged horizontally in a row
     * instead of vertically in a column. The default value is false.
     */
    horizontal?: boolean | null;

    /**
     * If sticky headers should stick at the bottom instead of the top of the
     * ScrollView. This is usually used with inverted ScrollViews.
     */
    invertStickyHeaders?: boolean;

    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default) drags do not dismiss the keyboard.
     *   - 'onDrag' the keyboard is dismissed when a drag begins.
     *   - 'interactive' the keyboard is dismissed interactively with the drag
     *     and moves in synchrony with the touch; dragging upwards cancels the
     *     dismissal.
     */
    keyboardDismissMode?: 'none' | 'interactive' | 'on-drag';

    /**
     * Determines when the keyboard should stay visible after a tap.
     * - 'never' (the default), tapping outside of the focused text input when the keyboard is up dismisses the keyboard. When this happens, children won't receive the tap.
     * - 'always', the keyboard will not dismiss automatically, and the scroll view will not catch taps, but children of the scroll view can catch taps.
     * - 'handled', the keyboard will not dismiss automatically when the tap was handled by a children, (or captured by an ancestor).
     * - false, deprecated, use 'never' instead
     * - true, deprecated, use 'always' instead
     */
    keyboardShouldPersistTaps?: boolean | 'always' | 'never' | 'handled';

    /**
     * Called when scrollable content view of the ScrollView changes.
     * Handler function is passed the content width and content height as parameters: (contentWidth, contentHeight)
     * It's implemented using onLayout handler attached to the content container which this ScrollView renders.
     *
     */
    onContentSizeChange?: (w: number, h: number) => void;

    /**
     * Fires at most once per frame during scrolling.
     * The frequency of the events can be contolled using the scrollEventThrottle prop.
     */
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires if a user initiates a scroll gesture.
     */
    onScrollBeginDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires when a user has finished scrolling.
     */
    onScrollEndDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires when scroll view has finished moving
     */
    onMomentumScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires when scroll view has begun moving
     */
    onMomentumScrollBegin?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * When true the scroll view stops on multiples of the scroll view's size
     * when scrolling. This can be used for horizontal pagination. The default
     * value is false.
     */
    pagingEnabled?: boolean;

    /**
     * When false, the content does not scroll. The default value is true
     */
    scrollEnabled?: boolean; // true

    /**
     * Experimental: When true offscreen child views (whose `overflow` value is
     * `hidden`) are removed from their native backing superview when offscreen.
     * This canimprove scrolling performance on long lists. The default value is
     * false.
     */
    removeClippedSubviews?: boolean;

    /**
     * When true, shows a horizontal scroll indicator.
     */
    showsHorizontalScrollIndicator?: boolean;

    /**
     * When true, shows a vertical scroll indicator.
     */
    showsVerticalScrollIndicator?: boolean;

    /**
     * Style
     */
    style?: StyleProp<ViewStyle>;

    /**
     * A RefreshControl component, used to provide pull-to-refresh
     * functionality for the ScrollView.
     */
    refreshControl?: React.ReactElement<RefreshControlProps>;

    /**
     * When `snapToInterval` is set, `snapToAlignment` will define the relationship of the the snapping to the scroll view.
     *      - `start` (the default) will align the snap at the left (horizontal) or top (vertical)
     *      - `center` will align the snap in the center
     *      - `end` will align the snap at the right (horizontal) or bottom (vertical)
     */
    snapToAlignment?: 'start' | 'center' | 'end';

    /**
     * When set, causes the scroll view to stop at multiples of the value of `snapToInterval`.
     * This can be used for paginating through children that have lengths smaller than the scroll view.
     * Used in combination with `snapToAlignment` and `decelerationRate="fast"`. Overrides less
     * configurable `pagingEnabled` prop.
     */
    snapToInterval?: number;

    /**
     * When set, causes the scroll view to stop at the defined offsets. This can be used for
     * paginating through variously sized children that have lengths smaller than the scroll view.
     * Typically used in combination with `decelerationRate="fast"`. Overrides less configurable
     * `pagingEnabled` and `snapToInterval` props.
     */
    snapToOffsets?: number[];

    /**
     * Use in conjuction with `snapToOffsets`. By default, the beginning of the list counts as a
     * snap offset. Set `snapToStart` to false to disable this behavior and allow the list to scroll
     * freely between its start and the first `snapToOffsets` offset. The default value is true.
     */
    snapToStart?: boolean;

    /**
     * Use in conjuction with `snapToOffsets`. By default, the end of the list counts as a snap
     * offset. Set `snapToEnd` to false to disable this behavior and allow the list to scroll freely
     * between its end and the last `snapToOffsets` offset. The default value is true.
     */
    snapToEnd?: boolean;

    /**
     * When true, the scroll view stops on the next index (in relation to scroll position at release)
     * regardless of how fast the gesture is. This can be used for horizontal pagination when the page
     * is less than the width of the ScrollView. The default value is false.
     */
    disableIntervalMomentum?: boolean;

    /**
     * When true, the default JS pan responder on the ScrollView is disabled, and full control over
     * touches inside the ScrollView is left to its child components. This is particularly useful
     * if `snapToInterval` is enabled, since it does not follow typical touch patterns. Do not use
     * this on regular ScrollView use cases without `snapToInterval` as it may cause unexpected
     * touches to occur while scrolling. The default value is false.
     */
    disableScrollViewPanResponder?: boolean;
}