declare interface ISearchResultsWebPartStrings {
    SearchQuerySettingsGroupName: string;
    SearchSettingsGroupName: string;
    SearchQueryKeywordsFieldLabel: string;
    SearchQueryKeywordsFieldDescription: string;
    QueryTemplateFieldLabel: string;
    SelectedPropertiesFieldLabel: string;
    SelectedPropertiesFieldDescription: string;
    LoadingMessage: string;
    EnableLocalizationLabel: string;
    EnableLocalizationOnLabel: string;
    EnableLocalizationOffLabel: string;
    MaxResultsCount: string;
    NoResultMessage: string;
    SortableFieldsLabel: string;
    SortableFieldsDescription: string;
    FilterPanelTitle: string;
    FilterResultsButtonLabel: string;
    SelectedFiltersLabel: string;
    SearchResultsLabel: string;
    RemoveAllFiltersLabel: string;
    UsePaginationWebPartLabel: string;
    ShowResultsCountLabel: string;
    ShowBlankLabel: string;
    ShowBlankEditInfoMessage: string;
    NoFilterConfiguredLabel: string;
    SearchQueryPlaceHolderText: string;
    EmptyFieldErrorMessage: string;
    PlaceHolderEditLabel: string;
    PlaceHolderConfigureBtnLabel: string;
    PlaceHolderIconText: string;
    PlaceHolderDescription: string;
    ResultSourceIdLabel: string;
    InvalidResultSourceIdMessage: string;
    EnableQueryRulesLabel: string;
    StylingSettingsGroupName: string;
    CountMessageShort: string;
    CountMessageLong: string;
    CancelButtonText: string;
    DialogButtonLabel: string;
    DialogButtonText: string;
    DialogTitle: string;
    SaveButtonText: string;
    ResultsLayoutLabel: string;
    ListLayoutOption: string;
    TilesLayoutOption: string;
    CustomLayoutOption: string;
    TemplateUrlFieldLabel: string;
    TemplateUrlPlaceholder: string;
    ErrorTemplateExtension: string;
    ErrorTemplateResolve: string;
    WebPartTitle: string;
    HandlebarsHelpersDescription: string;
    PromotedResultsLabel: string;
    PanelCloseButtonAria:string;
    UseRefinersWebPartLabel: string;
    UseRefinersFromComponentLabel: string;
    UsePaginationFromComponentLabel: string;
    customTemplateFieldsLabel: string;  
    customTemplateFieldsPanelHeader: string;  
    customTemplateFieldsConfigureButtonLabel: string;  
    customTemplateFieldTitleLabel: string;  
    customTemplateFieldPropertyLabel: string;  
    Sort: {
        SortPropertyPaneFieldLabel
        SortListDescription: string;
        SortDirectionAscendingLabel:string;
        SortDirectionDescendingLabel:string;
        SortErrorMessage:string;
        SortPanelSortFieldLabel:string;
        SortPanelSortFieldAria:string;
        SortPanelSortFieldPlaceHolder:string;
        SortPanelSortDirectionLabel:string;         
        SortableFieldsPropertyPaneField: string;
        SortableFieldsDescription: string;
        SortableFieldManagedPropertyField: string;   
        SortableFieldDisplayValueField: string;
        EditSortableFieldsLabel: string;
        EditSortLabel: string;
    },
    Synonyms: {
        EditSynonymLabel: string;
        SynonymListDescription: string;
        SynonymPropertyPanelFieldLabel: string;
        SynonymListTerm: string;
        SynonymListSynonyms: string;
        SynonymIsTwoWays: string;
        SynonymListSynonymsExemple: string;
        SynonymListTermExemple: string;
    },
    ResultTypes: {
        ResultTypeslabel: string;
        ResultTypesDescription: string;
        EditResultTypesLabel: string;
        ConditionPropertyLabel: string;
        ConditionValueLabel: string;
        CondtionOperatorValue: string;
        ExternalUrlLabel: string;
        EqualOperator: string;
        ContainsOperator: string;
        StartsWithOperator: string;
        NotNullOperator: string;
        GreaterOrEqualOperator: string;
        GreaterThanOperator: string;
        LessOrEqualOperator: string;
        LessThanOperator: string;
    },
    TermNotFound: string;
    UseDefaultSearchQueryKeywordsFieldLabel: string;
    DefaultSearchQueryKeywordsFieldLabel: string;
    DefaultSearchQueryKeywordsFieldDescription: string;
}

declare module 'SearchResultsWebPartStrings' {
    const strings: ISearchResultsWebPartStrings;
    export = strings;
}
